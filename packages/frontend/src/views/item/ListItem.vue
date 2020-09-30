<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Place</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>lieu</td>
                    <td>trieu</td>
                    <td>thuan</td>
                    <td>platfox</td>
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
                    Add new item
                </button>
            </div>
            <b-modal id="my-modal" ref="my-modal" hide-footer>
                <AddItem />
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
import AddItem from './AddItem.vue';
import { IListItem } from '../../shared/models/IModels';
@Component({
    components: {
        AddItem,
    },
})
export default class ListItem extends Vue {
    private listItem: IListItem = {
        image: '',
        name: '',
        price: '',
        place: '',
        status: '',
    };
    private showModal(): void {
        this.$bvModal.show('my-modal');
    }
    private hideModal(): void {
        this.$bvModal.hide('my-modal');
    }
}
</script>
