<!-- @TodoComponent -->
<script lang="ts" setup>
import { PropType } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// const props = withDefaults(defineProps<Props>(), {  })

// since Vue 3.2.20 and its propsDestructureTransform option, we
// can destructure and give a default value to a prop directly:
// const { ponyModel, isRunning = false } = defineProps<Props>()

interface Props {
	anyProps: any
}
// ⚫️⚫️================
const props = defineProps({
	anyProp: {
		type: Object as PropType<any>,
		required: false
	},
})

// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// setup


</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
  <div class="container">
	  <!---->
	  <h2 class="text-center mt-5">Vue 3 Todo App</h2>
	  
	  <div class="d-flex">
		  <!-- Input -->
		  <input
			  type="text"
			  placeholder="Enter Task"
			  class="form-control"
		  >
		
		  <!-- Button -->
		  <button class="btn btn-warning rounded-0">
			  SUBMIT
		  </button>
	  </div>
	
	  <!-- Task-Table -->
	  <table class="table table-bordered">
		  <thead>
		  <tr>
			  <th scope="col">Task</th>
			  <th scope="col">Status</th>
			  <th scope="col" class="text-center">#</th>
			  <th scope="col" class="text-center">#</th>
		  </tr>
		  </thead>
		  <tbody>
		  <tr>
			  <th scope="row">Steal bananas from the store.</th>
			  <td>To-do</td>
			  <td></td>
			  <td></td>
		  </tr>
		  </tbody>
	  </table>
  </div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
