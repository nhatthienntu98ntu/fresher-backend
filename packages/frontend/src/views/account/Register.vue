<template>
    <div>
        <section class="copy">
            <h2 class="center">Register</h2>
        </section>
        <div class="split-screennn">
            <form class="register" @submit.prevent="handleSubmit">
                <div class="form-input">
                    <div class="left-regiser">
                        <div class="input-container name">
                            <label>Email</label>
                            <b-form-input
                                v-model.trim="$v.user.email.$model"
                                placeholder="Enter your email"
                                :class="{
                                    'is-invalid': $v.user.email.$error,
                                }"
                            />
                            <div
                                v-if="$v.user.email.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.email.required"
                                    >Email is required</span
                                >
                                <span v-if="!$v.user.email.email"
                                    >Please provide a valid email</span
                                >
                            </div>
                        </div>
                        <div class="input-container fullname">
                            <div class="password_previous">
                                <label>Password</label>
                                <b-form-input
                                    v-model.trim="$v.user.password.$model"
                                    placeholder="Must be at least 6 characters"
                                    type="password"
                                    :class="{
                                        'is-invalid': $v.user.password.$error,
                                    }"
                                />
                                <div
                                    v-if="$v.user.password.$error"
                                    class="invalid-feedback"
                                >
                                    <span v-if="!$v.user.password.required"
                                        >Password is required</span
                                    >
                                    <span v-if="!$v.user.password.minLength"
                                        >Password must be at least 6
                                        characters</span
                                    >
                                    <span v-if="!$v.user.password.maxLength">
                                        Only maximum 30 characters</span
                                    >
                                </div>
                            </div>
                            <div class="password_confirm">
                                <label>Confirm Password</label>
                                <b-form-input
                                    v-model.trim="
                                        $v.user.confirmPassword.$model
                                    "
                                    placeholder="Re-Type Password"
                                    type="password"
                                    :class="{
                                        'is-invalid':
                                            $v.user.confirmPassword.$error,
                                    }"
                                />
                                <div
                                    v-if="$v.user.confirmPassword.$error"
                                    class="invalid-feedback"
                                >
                                    <span
                                        v-if="!$v.user.confirmPassword.required"
                                        >Re-Password is required</span
                                    >
                                    <span
                                        v-if="
                                            !$v.user.confirmPassword
                                                .sameAsPassword
                                        "
                                        >This value should be the same.</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="fullname">
                            <div class="input-container firstname">
                                <label for="">First name</label>
                                <b-form-input
                                    v-model.trim="$v.user.firstname.$model"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Enter your first name"
                                    :class="{
                                        'is-invalid': $v.user.firstname.$error,
                                    }"
                                />
                                <div
                                    v-if="$v.user.firstname.$error"
                                    class="invalid-feedback"
                                >
                                    <span v-if="!$v.user.firstname.required"
                                        >Firstname is required</span
                                    >
                                </div>
                            </div>
                            <div class="input-container lastname">
                                <label for="">Last name</label>
                                <b-form-input
                                    v-model.trim="$v.user.lastname.$model"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Enter your last name"
                                    :class="{
                                        'is-invalid': $v.user.lastname.$error,
                                    }"
                                />
                                <div
                                    v-if="$v.user.lastname.$error"
                                    class="invalid-feedback"
                                >
                                    <span v-if="!$v.user.lastname.required"
                                        >Lastname is required</span
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="input-container birthday">
                            <label for="">Birthday</label>
                            <b-form-datepicker
                                id="datepicker"
                                class="mb-2"
                                v-model="$v.user.birthday.$model"
                                name="birthday"
                                :class="{
                                    'is-invalid': $v.user.birthday.$error,
                                }"
                            />
                            <div
                                v-if="$v.user.birthday.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.birthday.required"
                                    >Birthday is required</span
                                >
                            </div>
                        </div>
                        <div class="input-container gender">
                            <label for="">Gender</label>
                            <b-form-select
                                v-model="user.gender.value"
                                :options="user.gender.items"
                            >
                            </b-form-select>
                        </div>
                    </div>
                    <div class="right-register">
                        <div class="input-container country">
                            <label for="country">Country:</label>
                            <b-form-input
                                v-model="user.country"
                                :class="{
                                    'is-invalid':
                                        submitted && $v.user.country.$error,
                                }"
                                disabled
                            />
                        </div>
                        <div class="input-container province">
                            <label for="province">Province</label>
                            <b-form-select
                                :class="{
                                    'is-invalid':
                                        submitted && $v.user.province.$error,
                                }"
                                v-model.trim="user.province"
                                id="province"
                                name="province"
                            />
                            <div
                                v-if="submitted && $v.user.province.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.province.required"
                                    >Province is required</span
                                >
                            </div>
                        </div>
                        <div class="input-container city">
                            <label for="city">City:</label>
                            <b-form-select
                                :class="{
                                    'is-invalid':
                                        submitted && $v.user.city.$error,
                                }"
                                v-model="user.city"
                                id="city"
                                name="city"
                            />
                            <div
                                v-if="submitted && $v.user.city.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.city.required"
                                    >City is required</span
                                >
                            </div>
                        </div>
                        <div class="input-container address">
                            <label for="">Street Address</label>
                            <b-form-input
                                :class="{
                                    'is-invalid': $v.user.address.$error,
                                }"
                                v-model="$v.user.address.$model"
                                id="address"
                                name="address"
                            />
                            <div
                                v-if="$v.user.address.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.address.required"
                                    >Address is required</span
                                >
                            </div>
                        </div>
                        <div class="input-container phone">
                            <label>Phone</label>
                            <b-form-input
                                :class="{
                                    'is-invalid': $v.user.phone.$error,
                                }"
                                v-model.trim="$v.user.phone.$model"
                                id="phone"
                                name="phone"
                            />
                            <div
                                v-if="$v.user.phone.$error"
                                class="invalid-feedback"
                            >
                                <span v-if="!$v.user.phone.required"
                                    >Phone is required</span
                                >
                                <span v-if="!$v.user.phone.numeric"
                                    >Please provide a valid phone</span
                                >
                                <span v-if="!$v.user.phone.minLength"
                                    >Must be at least 11 characters</span
                                >
                                <span v-if="!$v.user.phone.maxLength"
                                    >Must be at least 11 characters</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <button class="button-submit" type="submit">Register</button>
                <router-link to="/login"
                    ><div class="back">
                        <i class="fa fa-arrow-left"></i> Back to login
                    </div></router-link
                >
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Validations } from 'vuelidate-property-decorators';
import {
    required,
    email,
    minLength,
    maxLength,
    sameAs,
    numeric,
} from 'vuelidate/lib/validators';
import { IRegister } from '../../shared/models/IModels';
// import axios from 'axios';
@Component
export default class Register extends Vue {
    private user: IRegister = {
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        birthday: '',
        country: 'Việt Nam',
        province: '',
        city: '',
        address: '',
        phone: '',
        gender: {
            items: [
                { value: 'male', text: 'Male' },
                { value: 'female', text: 'Female' },
            ],
            value: 'male',
        },
    };

    private submitted = false;
    // private name = '';
    // private apiUser = 'https://jsonplaceholder.typicode.com/users';

    // private created() {
    //     fetch(this.apiUser)
    //         .then(res => res.json())
    //         .then(post => console.log(post));
    // }

    // private created(): void {
    //     axios
    //         .get(this.apiUser)
    //         .then(res => {
    //             this.name = res.data.map((item: { name: string }) => item.name);
    //         })
    //         .then(() => {
    //             console.log(this.name);
    //         });
    // }

    @Validations()
    private validations() {
        return {
            user: {
                email: { required, email, maxLength: maxLength(50) },
                password: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(30),
                },
                confirmPassword: {
                    required,
                    minLength: minLength(6),
                    maxLength: maxLength(30),
                    sameAsPassword: sameAs('password'),
                },
                firstname: {
                    required,
                },
                lastname: {
                    required,
                },
                birthday: {
                    required,
                },
                gender: {
                    required,
                },
                country: {
                    required,
                },
                province: {
                    required,
                },
                city: {
                    required,
                },
                address: {
                    required,
                },
                phone: {
                    required,
                    numeric,
                    minLength: minLength(10),
                    maxLength: maxLength(11),
                },
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
        alert(JSON.stringify(this.user));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user.gender));
    }
}
</script>
