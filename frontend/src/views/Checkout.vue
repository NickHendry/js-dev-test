<template>
    <ValidationProvider class="flex flex-col w-full items-center">
        <div class="border-md shadow-md w-1/2 p-3">
            <span class="text-lg mb-5">Details:</span>
            <div class="flex flex-row pt-5 pb-5 justify-start">
                <label class="flex w-30">Name:</label>
                <input name="name" type="text" v-model="name" class="flex w-30 border-solid border-2"/>
            </div>
            <div class="flex flex-row pt-5 pb-5 justify-start">
                <label class="lbl">Phone:</label>
                <input name="phone" type="number" v-model="phone" class="flex w-30 border-solid border-2"/>
            </div>
            <div class="flex flex-row pt-5 pb-5 justify-start">
                <label class="lbl">Email:</label>
                <input name="email" type="text" v-model="email" class="flex w-30 border-solid border-2"/>
            </div>
        </div>
        <div class="border-md shadow-md w-1/2 p-3 mt-5">
            <CartCard
                class="bg-gray-300 rounded px-4 py-2 mb-4" 
                v-for="product in cartProducts"
                :cartProduct="product"
                :key="product.id"
                />
        </div>
        <div class="border-md shadow-md w-1/2 p-3 mt-5">
            <button id="purchaseBtn">Purchase</button>
        </div>
    </ValidationProvider>
</template>

<script>
import CartCard from '@/components/CartCard';
import { mapGetters } from 'vuex';
import { ValidationProvider } from 'vee-validate';

export default{
    name: 'Checkout',
    components: {
        ValidationProvider,
        CartCard,
    },
    data(){
        return{
            products:[],
            name: '',
            phone:0,
            email:'',
            
            exCost:0.0,
            gstCost:0.0,
        }
    },
    computed:{
        ...mapGetters('purchasing', ['cartProducts']),
    }
}
</script>