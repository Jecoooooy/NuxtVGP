<template>
	<v-container>
		<v-card title="datatable" subtitle="Data from spaceX graphql">
			<template #append>
				<v-text-field
					v-model="search"
					label="Search"
					width="300"
					density="compact"
					variant="outlined"
					hide-details
					prepend-inner-icon="mdi-magnify"
				/>
			</template>
			<v-card-text>
				<ClientOnly>
					<v-data-table :headers="headers" hover :search="search" :items="ships">
						<template #item.active="{ item }">
							<v-chip :color="item.active ? 'green' : 'red'">{{ item.active }}</v-chip>
						</template>
					</v-data-table>
					<template #fallback>
						<v-skeleton-loader type="table" />
					</template>
				</ClientOnly>
			</v-card-text>
		</v-card>
	</v-container>
</template>
<script lang="ts" setup>
const search = ref('')
const headers = ref([
	{ title: 'ID', key: 'id' },
	{ title: 'Ship Name', key: 'name' },
	{ title: 'Status', key: 'active' },
])
const query = gql`
	query getShips {
		ships {
			id
			name
			active
		}
	}
`
const { data } = useAsyncQuery<{
	ships: {
		id: string
		name: string
		active: boolean
	}[]
}>(query)
const ships = computed(() => data.value?.ships ?? [])
</script>
