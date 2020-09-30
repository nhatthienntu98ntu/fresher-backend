<template>
    <form class="addplace" @submit.prevent="handleSubmit">
        <div class="form-input">
            <div class="form-addplace">
                <div class="input-container nameplace">
                    <label>Name Place</label>
                    <b-form-input
                        v-model.trim="$v.addPlace.name.$model"
                        :class="{
                            'is-invalid': $v.addPlace.name.$error,
                        }"
                    />
                    <div
                        v-if="$v.addPlace.name.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.addPlace.name.required"
                            >Name place is required</span
                        >
                        <span v-if="!$v.addPlace.name.maxLength">
                            Only maximum 100 characters</span
                        >
                    </div>
                </div>

                <div class="input-container openday">
                    <label>Open days</label>
                    <v-select
                        multiple
                        v-model="$v.addPlace.openDays.$model"
                        :class="{
                            'is-invalid': $v.addPlace.openDays.$error,
                        }"
                        :options="[
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday',
                        ]"
                    />
                    <div
                        v-if="$v.addPlace.openDays.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.addPlace.openDays.required"
                            >Open days is required</span
                        >
                    </div>
                </div>
                <div class="input-container openinghours fullname">
                    <div class="openingtime">
                        <label>Opening time</label>
                        <b-form-timepicker
                            v-model="$v.addPlace.openTime.$model"
                            :class="{
                                'is-invalid': $v.addPlace.openTime.$error,
                            }"
                            locale="en"
                        />
                        <div
                            v-if="$v.addPlace.openTime.$error"
                            class="invalid-feedback"
                        >
                            <span v-if="!$v.addPlace.openTime.required"
                                >Opening time is required</span
                            >
                        </div>
                    </div>
                    <div class="closingtime">
                        <label>Closing time</label>
                        <b-form-timepicker
                            v-model="$v.addPlace.closeTime.$model"
                            :class="{
                                'is-invalid': $v.addPlace.closeTime.$error,
                            }"
                            locale="en"
                        />
                        <div
                            v-if="$v.addPlace.closeTime.$error"
                            class="invalid-feedback"
                        >
                            <span v-if="!$v.addPlace.closeTime.required"
                                >Closing time is required</span
                            >
                        </div>
                    </div>
                </div>
                <div class="input-container phone">
                    <label>Phone</label>
                    <b-form-input
                        :class="{
                            'is-invalid': $v.addPlace.phone.$error,
                        }"
                        v-model.trim="$v.addPlace.phone.$model"
                        id="phone"
                        name="phone"
                    />
                    <div
                        v-if="$v.addPlace.phone.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.addPlace.phone.required"
                            >Phone is required</span
                        >
                        <span v-if="!$v.addPlace.phone.numeric"
                            >Please provide a valid phone</span
                        >
                        <span v-if="!$v.addPlace.phone.minLength"
                            >Must be at least 11 characters</span
                        >
                        <span v-if="!$v.addPlace.phone.maxLength"
                            >Must be at least 11 characters</span
                        >
                    </div>
                </div>
                <div class="input-container province">
                    <label for="province">Province</label>
                    <b-form-select id="province" name="province" />
                </div>
                <div class="input-container city">
                    <label for="city">City</label>
                    <b-form-select id="city" name="city" />
                </div>
                <div class="input-container address">
                    <label for="">Street Address</label>
                    <b-form-input
                        :class="{
                            'is-invalid': $v.addPlace.street.$error,
                        }"
                        v-model="$v.addPlace.street.$model"
                        id="street"
                        name="street"
                    />
                    <div
                        v-if="$v.addPlace.street.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.addPlace.street.required"
                            >Street is required</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <button class="button-submit" type="submit">Add place</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Validations } from 'vuelidate-property-decorators';
import { IAddPlace } from '../../shared/models/IModels';
import {
    required,
    minLength,
    maxLength,
    numeric,
} from 'vuelidate/lib/validators';

@Component
export default class AddPlace extends Vue {
    private addPlace: IAddPlace = {
        name: '',
        openDays: [],
        openTime: '',
        closeTime: '',
        phone: '',
        state: '',
        city: '',
        street: '',
    };
    private submitted = false;
    @Validations()
    private validations() {
        return {
            addPlace: {
                name: { required, maxLength: maxLength(50) },
                openDays: { required },
                openTime: { required },
                closeTime: { required },
                phone: {
                    required,
                    numeric,
                    minLength: minLength(10),
                    maxLength: maxLength(11),
                },
                state: { required },
                city: { required },
                street: { required },
            },
        };
    }
    private handleSubmit(): void {
        this.$v.$touch();
        // console.log(this.$v);
        // this.submitted = true;
        // if (this.$v.$invalid) {
        //     return;
        // }

        alert(JSON.stringify(this.addPlace));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
</script>
