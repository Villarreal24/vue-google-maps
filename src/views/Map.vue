<template>
    <div class="container">
        <h1>Google maps</h1>
        <div class="map">
            <GMapMap :center="center" :zoom="12" map-type-id="terrain" style="width: 1250px; height: 800px">
                <GMapCluster>
                    <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                        :draggable="true" @click="center=m.position" />
                </GMapCluster>
            </GMapMap>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            center: { lat: 51.093048, lng: 6.842120 },
            markers: [
                {
                    position: {
                        lat: 51.093048, lng: 6.842120
                    },
                }
                , // Along list of clusters
            ]
        }
    }
}

</script>

<style>
.map{
    justify-content: center;
}
</style>