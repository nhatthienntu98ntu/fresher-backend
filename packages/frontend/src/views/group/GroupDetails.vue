<template>
    <div class="container">
        <h2>
            list of users in the group
        </h2>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>lieu</td>
                    <td class="flex">
                        <div class="delete ml-3">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="control">
            <div class="addnew">
                <button class="button-submit newItem" @click="showModal">
                    Add new user
                </button>
            </div>
            <b-modal ref="my-modal" hide-footer id="my-modal">
                <AddUserInGroup />
            </b-modal>
            <div class="pagination">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AddUserInGroup from './AddUserInGroup.vue';
@Component({
    components: {
        AddUserInGroup,
    },
})
export default class GroupDetails extends Vue {
    private showModal(): void {
        this.$bvModal.show('my-modal');
    }
    private hideModal(): void {
        this.$bvModal.hide('my-modal');
    }
}
</script>

<style lang="scss" scoped></style>
