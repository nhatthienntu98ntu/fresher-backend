<template>
    <div>
        <div class="split-screen">
            <div class="left">
                <img
                    src="../../assets/images/banner.svg"
                    alt=""
                    class="left__img"
                />
            </div>
            <div class="right">
                <form @submit.prevent="handleSubmit">
                    <section class="copy">
                        <h2>Sign In</h2>
                        <div class="login-container">
                            <p>
                                Already have an account?
                                <router-link to="/register"
                                    ><strong>Register</strong></router-link
                                >
                            </p>
                        </div>
                    </section>
                    <div class="input-container name">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            v-model.trim="user.email"
                            class="border"
                            :class="{
                                'is-invalid': submitted && $v.user.email.$error,
                            }"
                        />
                        <div
                            v-if="submitted && $v.user.email.$error"
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

                    <div class="input-container password ">
                        <label>Password</label>
                        <input
                            :type="passwordFieldType"
                            placeholder="Must be at least 6 characters"
                            id="password"
                            name="password"
                            class="border"
                            v-model.trim="user.password"
                            :class="{
                                'is-invalid':
                                    submitted && $v.user.password.$error,
                            }"
                        />
                        <div
                            v-if="submitted && $v.user.password.$error"
                            class="invalid-feedback"
                        >
                            <span v-if="!$v.user.password.required"
                                >Password is required</span
                            >
                        </div>

                        <b-icon
                            icon="eye-slash"
                            style="color: #111; cursor: pointer;"
                            @click="switchVisibility"
                            class="eye-icon"
                        />
                    </div>

                    <button class="button-submit" type="submit">
                        Sign In
                    </button>
                    <div class="connect">
                        <p>Connect with <a>Facebook</a> or <a>Gmail</a> ?</p>
                    </div>
                    <section class="copy legal">
                        <p>
                            <span class="small"
                                >By continuing, you agree to accept your <br />
                                <a>Privacy Policy</a> &amp;
                                <a>Terms of Service</a>.</span
                            >
                        </p>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ILogin } from '../../shared/models/IModels';
import {
    required,
    email,
    minLength,
    maxLength,
} from 'vuelidate/lib/validators';
import { Validations } from 'vuelidate-property-decorators';

@Component
export default class Login extends Vue {
    private user: ILogin = {
        email: '',
        password: '',
    };
    @Validations()
    @Validations()
    private validations() {
        return {
            user: {
                email: { required, email },
                password: {
                    required,
                },
            },
        };
    }

    private submitted = false;
    private passwordFieldType = 'password';

    private handleSubmit(): void {
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
    }

    private switchVisibility(): void {
        this.passwordFieldType =
            this.passwordFieldType === 'password' ? 'text' : 'password';
    }
}
</script>
