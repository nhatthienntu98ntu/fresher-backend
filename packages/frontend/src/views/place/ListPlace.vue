<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="showModal2" id="tooltip-target-1">
                    <th scope="row">1</th>
                    <td>lieutrieuthuan</td>
                    <td>123456789</td>
                    <td>nhatrang</td>
                    <td class="flex">
                        <div class="edit ml-2">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                        <div class="delete pl-2">
                            <i class="fas fa-edit"></i>
                        </div>
                    </td>
                    <b-tooltip
                        target="tooltip-target-1"
                        triggers="hover"
                        class="tooltip"
                    >
                        View Details
                    </b-tooltip>
                </tr>
            </tbody>
        </table>
        <div class="control">
            <div class="addnew">
                <button class="button-submit newItem" @click="showModal1">
                    Add new place
                </button>
            </div>
            <b-modal id="modal1" ref="modal1" hide-footer>
                <AddPlace />
            </b-modal>
            <b-modal id="modal2" ref="modal2" hide-footer>
                <PlaceDetails />
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
import AddPlace from './AddPlace.vue';
import PlaceDetails from './PlaceDetails.vue';
@Component({
    components: {
        AddPlace,
        PlaceDetails,
    },
})
export default class ListPlace extends Vue {
    private showModal1(): void {
        this.$bvModal.show('modal1');
    }
    private hideModal1(): void {
        this.$bvModal.hide('modal1');
    }
    private showModal2(): void {
        this.$bvModal.show('modal2');
    }
    private hideModal2(): void {
        this.$bvModal.hide('modal2');
    }
}
</script>
