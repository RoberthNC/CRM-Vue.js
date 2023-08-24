<script setup>
    import axios from "axios"
    import { FormKit } from "@formkit/vue"
    import { useRouter } from "vue-router"
    import RouterLink from "../components/ui/RouterLink.vue"
    import Heading from "../components/ui/Heading.vue"

    const router = useRouter()

    defineProps({
        titulo:{
            type:String
        }
    })

    const handleSubmit = (data) => {
        axios.post('http://localhost:4000/clientes', data)
            .then(response => {
                console.log(response)
                router.push({ name:'inicio' })
            })
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
        </div>
        <Heading>{{ titulo }}</Heading>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar Cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre del cliente"
                        validation="required"
                        :validation-messages="{required:'El nombre del cliente es obligatorio'}"
                    />
                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del cliente"
                        validation="required"
                        :validation-messages="{required:'El apellido del cliente es obligatorio'}"
                    />
                    <FormKit 
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email del cliente"
                        validation="required|email"
                        :validation-messages="{required:'El email del cliente es obligatorio', email:'Coloca un email válido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Teléfono: XXX-XXX-XXX"
                        name="telefono"
                        placeholder="Teléfono del cliente"
                        validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
                        :validation-messages="{matches:'El formato no es válido'}"
                    />
                    <FormKit 
                        type="text"
                        label="Empresa"
                        name="empresa"
                        placeholder="Empresa del cliente"
                    />
                    <FormKit 
                        type="text"
                        label="Puesto"
                        name="puesto"
                        placeholder="Puesto del cliente"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper{
        max-width: 100%;
    }
</style>