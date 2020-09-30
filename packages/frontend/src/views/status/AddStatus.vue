<template>
    <form class="additem" @submit.prevent="handleSubmit">
        <div class="form-input">
            <div class="form-additem">
                <div class="input-container namegroup">
                    <label>Status Name</label>
                    <b-form-input
                        v-model="$v.statusUser.name.$model"
                        :class="{
                            'is-invalid': $v.statusUser.name.$error,
                        }"
                    />
                    <div
                        v-if="$v.statusUser.name.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.statusUser.name.required"
                            >Status name is required</span
                        >
                        <span v-if="!$v.statusUser.name.maxLength">
                            Only maximum 50 characters</span
                        >
                    </div>
                </div>
                <div class="input-container description">
                    <label for="place">Description</label>
                    <b-form-input
                        v-model.trim="$v.statusUser.description.$model"
                        :class="{
                            'is-invalid': $v.statusUser.description.$error,
                        }"
                    />
                    <div
                        v-if="$v.statusUser.description.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.statusUser.description.required"
                            >Description required</span
                        >
                        <span v-if="!$v.statusUser.description.maxLength">
                            Only maximum 200 characters</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <button class="button-submit mt-2" type="submit">Add Status</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Validations } from 'vuelidate-property-decorators';
import { required, maxLength } from 'vuelidate/lib/validators';
import { IStatusUser } from '../../shared/models/IModels';

@Component
export default class AddStatus extends Vue {
    private statusUser: IStatusUser = {
        name: '',
        description: '',
    };
    @Validations()
    private validations() {
        return {
            statusUser: {
                name: { required, maxLength: maxLength(50) },
                description: { required, maxLength: maxLength(200) },
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

        alert(JSON.stringify(this.statusUser));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
</script>
