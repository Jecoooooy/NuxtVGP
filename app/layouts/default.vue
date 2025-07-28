<template>
	<v-app>
		<ClientOnly>
			<v-app-bar color="primary">
				<v-app-bar-nav-icon @click="drawer = !drawer" />
				<v-app-bar-title>Apollo</v-app-bar-title>
				<template #append>
					<v-switch v-model="theme" hide-details />
					<v-btn class="ml-4" icon>
						<v-icon>mdi-dots-vertical</v-icon>
						<v-menu activator="parent">
							<v-list>
								<v-list-item
									v-for="(item, index) in items"
									:key="index"
									:value="index"
									:title="item.title"
								/>
							</v-list>
						</v-menu>
					</v-btn>
				</template>
			</v-app-bar>
		</ClientOnly>
		<v-navigation-drawer v-model="drawer">
			<v-list>
				<v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
				<v-divider></v-divider>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					link
					:value="index"
					:title="item.title"
				/>
			</v-list>
		</v-navigation-drawer>
		<v-main>
			<slot />
		</v-main>
	</v-app>
</template>
<script setup lang="ts">
const theme = storeToRefs(useTheme())
const drawer = ref(false)
const items = ref([
	{ title: 'Click Me' },
	{ title: 'Click Me' },
	{ title: 'Click Me' },
	{ title: 'Click Me 2' },
])
</script>
