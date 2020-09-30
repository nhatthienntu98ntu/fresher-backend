<template>
    <div class="container">
        <h2>
            List Status
        </h2>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Online</td>
                    <td>This is online</td>
                    <td class="flex">
                        <div class="delete ml-2">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <div class="edit pl-2">
                            <i class="fas fa-edit"></i>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="control">
            <div class="addnew">
                <button class="button-submit newItem" @click="showModal">
                    Add Status
                </button>
            </div>
            <b-modal id="my-modal" ref="my-modal" hide-footer>
                <AddStatus />
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
import AddStatus from './AddStatus.vue';

@Component({
    components: {
        AddStatus,
    },
})
export default class StatusUser extends Vue {
    private showModal(): void {
        this.$bvModal.show('my-modal');
    }
    private hideModal(): void {
        this.$bvModal.hide('my-modal');
    }
}
</script>
