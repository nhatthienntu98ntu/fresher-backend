<template>
    <form @submit.prevent="handleSubmit">
        <h5 class="center">List User</h5>
        <v-select
            multiple
            id="listUsers"
            name="name"
            v-model="$v.userInGroup.listUsers.$model"
            :class="{
                'is-invalid': $v.userInGroup.listUsers.$error,
            }"
            :options="['lllieutrieuthuan', 'nguyennhatthien', 'phanthanhdat']"
        />
        <div v-if="$v.userInGroup.listUsers.$error" class="invalid-feedback">
            <span v-if="!$v.userInGroup.listUsers.required"
                >Name user is required</span
            >
        </div>
        <button class="button-submit mt-3" type="submit">Add User</button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { required } from 'vuelidate/lib/validators';
import { Validations } from 'vuelidate-property-decorators';
import { IUserInGroup } from '../../shared/models/IModels';

@Component
export default class AddUserInGroup extends Vue {
    private userInGroup: IUserInGroup = {
        listUsers: [],
    };
    @Validations()
    private validations() {
        return {
            userInGroup: {
                listUsers: { required },
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

        alert(JSON.stringify(this.userInGroup));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
</script>
