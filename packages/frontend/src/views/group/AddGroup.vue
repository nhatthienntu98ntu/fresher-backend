<template>
    <form class="additem" @submit.prevent="handleSubmit">
        <div class="form-input">
            <div class="form-additem">
                <div class="input-container namegroup">
                    <label>Name Group</label>
                    <b-form-input
                        v-model="$v.group.name.$model"
                        :class="{
                            'is-invalid': $v.group.name.$error,
                        }"
                    />
                    <div v-if="$v.group.name.$error" class="invalid-feedback">
                        <span v-if="!$v.group.name.required"
                            >Name group is required</span
                        >
                        <span v-if="!$v.group.name.maxLength">
                            Only maximum 50 characters</span
                        >
                    </div>
                </div>
                <div class="input-container description">
                    <label for="place">Description</label>
                    <b-form-input
                        v-model.trim="$v.group.description.$model"
                        :class="{
                            'is-invalid': $v.group.description.$error,
                        }"
                    />
                    <div
                        v-if="$v.group.description.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.group.description.required"
                            >Desciption is required</span
                        >
                        <span v-if="!$v.group.description.maxLength">
                            Only maximum 200 characters</span
                        >
                    </div>
                </div>
                <div class="input-container createdby">
                    <label>Created By</label>
                    <v-select
                        id="created"
                        name="created"
                        v-model="$v.group.createdBy.$model"
                        :class="{
                            'is-invalid': $v.group.createdBy.$error,
                        }"
                        :options="[
                            'lllieutrieuthuan',
                            'nguyennhatthien',
                            'phanthanhdat',
                        ]"
                    />
                    <div
                        v-if="$v.group.createdBy.$error"
                        class="invalid-feedback"
                    >
                        <span v-if="!$v.group.createdBy.required"
                            >Created by is required</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <button class="button-submit mt-2" type="submit">Add Group</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Validations } from 'vuelidate-property-decorators';
import { required, maxLength } from 'vuelidate/lib/validators';
import { IGroup } from '../../shared/models/IModels';
@Component
export default class AddGroup extends Vue {
    private group: IGroup = {
        name: '',
        description: '',
        createdBy: '',
    };
    @Validations()
    private validations() {
        return {
            group: {
                name: { required, maxLength: maxLength(50) },
                description: { required, maxLength: maxLength(200) },
                createdBy: { required },
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

        alert(JSON.stringify(this.group));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
// :selectable="() => group.createdBy.length < 2"
</script>
