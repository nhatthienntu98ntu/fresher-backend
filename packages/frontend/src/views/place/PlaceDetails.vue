<template>
    <div>
        <form class="form-inputt">
            <div class="input-containerr">
                <label>Opening time: </label>
                <span>8:00:AM</span>
            </div>
            <div class="input-containerr">
                <label>Closing time: </label>
                <span>11:00:PM</span>
            </div>
            <div class="input-containerr">
                <label>Open days: </label>
                <span>Monday, Tuesday</span>
            </div>
            <div class="input-container">
                <label>Feed Back: </label>
                <b-form-textarea
                    id="textarea"
                    v-model="text"
                    placeholder="Feed back users..."
                    disabled
                ></b-form-textarea>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class PlaceDetails extends Vue {}
</script>
