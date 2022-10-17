<template>
    <div class="container text-center">
        <h1>Google maps</h1>

        <div class="alert alert-info" role="alert" v-show="infoMarker">
            Seleccionaste el marcador de: {{ this.infoMarker }}
        </div>

        <br>
        <div class="row">
            <div class="col">
                <h3>Tu posición: </h3>
            </div>
            <div class="col">
                <h3>Posicion del click</h3>
            </div>
        </div>
        <div class="row">
            <div class="col 6 row">
                <h5> Latitud <span style="color: blue;">{{ center.lat }}</span>
                    & longitud <span style="color: blue;"> {{ center.lng }}</span></h5>
            </div>
            <div class="col 6">
                <h5> Latitud <span style="color: blue;">{{ clickLocation.lat }}</span>
                    & longitud <span style="color: blue;"> {{ clickLocation.lng }}</span></h5>
            </div>
        </div>
        <!-- ======= MAP WITH LOCATION USER ======= -->
        <div class="map">
            <GMapMap :center="center" :zoom="13" map-type-id="roadmap"
                style="width: 100%; height: 650px" @click="getClickLocation">

                <GMapMarker :key="index" v-for="(m, index) in markers" 
                    :position="m.position" @click="openInfoAlert(m)"
                    :clickable="true" :draggable="false" />

            </GMapMap>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'App',
    data() {
        return {
            infoMarker: '',
            clickLocation: {
                lat: null,
                lng: null
            }
        }
    },
    computed: {
        ...mapState(['center', 'markers', 'paths'])
    },
    methods: {
        ...mapActions(['getLocation']),
        openInfoAlert(payload) {
            this.infoMarker = payload.place
        },
        getClickLocation(event) {
            this.clickLocation.lat = event.latLng.lat()
            this.clickLocation.lng = event.latLng.lng()
        }
    },
    created() {
        this.getLocation();
    }
}

</script>

<style>
.map {
    justify-content: center;
}
</style>