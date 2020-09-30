<template>
    <form class="additem" @submit.prevent="handleSubmit">
        <div class="form-input">
            <div class="form-additem">
                <div class="input-container openinghours fullname">
                    <div class="openingtime">
                        <label>Name item</label>
                        <b-form-input
                            v-model.trim="$v.addItem.name.$model"
                            :class="{
                                'is-invalid': $v.addItem.name.$error,
                            }"
                        />
                        <div
                            v-if="$v.addItem.name.$error"
                            class="invalid-feedback"
                        >
                            <span v-if="!$v.addItem.name.required"
                                >Name place is required</span
                            >
                            <span v-if="!$v.addItem.name.maxLength">
                                Only maximum 50 characters</span
                            >
                        </div>
                    </div>
                    <div class="closingtime">
                        <label>Price</label>
                        <b-form-input
                            v-model.trim="$v.addItem.price.$model"
                            :class="{
                                'is-invalid': $v.addItem.price.$error,
                            }"
                            id="price"
                            name="price"
                        />
                        <div
                            v-if="$v.addItem.price.$error"
                            class="invalid-feedback"
                        >
                            <span v-if="!$v.addItem.price.required"
                                >Phone is required</span
                            >
                            <span v-if="!$v.addItem.price.numeric"
                                >Please provide a valid price</span
                            >
                        </div>
                    </div>
                </div>
                <div class="input-container place">
                    <label for="place">Place</label>
                    <v-select
                        id="place"
                        name="place"
                        v-model="$v.addItem.place.$model"
                        :options="['Canada', 'United States']"
                        :class="{
                            'is-invalid': $v.addItem.place.$error,
                        }"
                    />
                </div>
                <div class="input-container image">
                    <label>Image</label>
                    <b-form-file accept=".jpg, .png, .gif"></b-form-file>
                </div>
            </div>
        </div>
        <button class="button-submit" type="submit">Add item</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { required, maxLength, numeric } from 'vuelidate/lib/validators';
import { Validations } from 'vuelidate-property-decorators';
import { IItem } from '../../shared/models/IModels';
@Component
export default class AddItem extends Vue {
    private addItem: IItem = {
        name: '',
        price: '',
        discounts: [],
        place: '',
        image: '',
    };
    // private submitted = false;
    @Validations()
    private validations() {
        return {
            addItem: {
                name: { required, maxLength: maxLength(50) },
                price: { required, numeric },
                discounts: { required },
                place: { required },
                image: { required },
            },
        };
    }
    private handleSubmit(): void {
        this.$v.$touch();
        // console.log(this.$v);
        // this.submitted = true;
        if (this.$v.$invalid) {
            return;
        }

        alert(JSON.stringify(this.addItem));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
</script>
