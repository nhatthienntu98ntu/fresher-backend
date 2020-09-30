<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Group Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="changeRoute">
                    <th scope="row">1</th>
                    <td>lieu</td>
                    <td>trieu</td>
                    <td>active</td>
                    <td class="flex">
                        <div class="edit ml-2">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <div class="delete pl-2">
                            <i class="fas fa-edit"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="control">
            <div class="addnew">
                <button class="button-submit newItem" @click="showModal">
                    Add new group
                </button>
            </div>
            <b-modal id="my-modal" ref="my-modal" hide-footer>
                <AddGroup />
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
import AddGroup from './AddGroup.vue';
@Component({
    components: {
        AddGroup,
    },
})
export default class Group extends Vue {
    private showModal(): void {
        this.$bvModal.show('my-modal');
    }
    private hideModal(): void {
        this.$bvModal.hide('my-modal');
    }
    private changeRoute(): void {
        this.$router.push('/group-details');
    }
}
</script>
