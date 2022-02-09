<!-- @TodoList -->
<script lang="ts" setup>
import { useFocus } from "@vueuse/core"
import { ref } from "vue"
import { useTodoComposable } from "./TodoList.composable"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// const props = withDefaults(defineProps<Props>(), {  })

// since Vue 3.2.20 and its propsDestructureTransform option, we
// can destructure and give a default value to a prop directly:
// const { ponyModel, isRunning = false } = defineProps<Props>()

// interface Props {
// 	AnyProps: any
// }
// // ⚫️⚫️================
// const props = defineProps({
// 	anyProp: {
// 		type: Object as PropType<any>,
// 		required: false
// 	},
// })
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// setup
const inputFocus = ref()

const {
	newTodo, editTodo, todoList,
	addTodo, removeTodo, doneEdit,
	targetInput, vFocus
} = useTodoComposable()


// Lifecycle hook to focus the ref in the input


</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
  <div class="todoListContainer">
    <!-- Input -->
	  <input
		  v-model="newTodo"
		  @keyup.enter="addTodo"
		  type="text"
		  class="todoInput"
		  placeholder="What needs to be done"
		  v-focus
	  >

    <!-- For-loop(TodoList) -->
	  <div
		  v-for="(todo, index) in todoList" :key="todo.id"
		  class="todoItem"
	  >
		  <div>
			  <h1 style="cursor: pointer;">
				  <span class="indexColor">
					  {{ todo.id }}:
				  </span>
				  <!---->
				  <span class="todoItemLeft">
					  <!--# Beginning v-if #-->
					  <span v-if="!todo.isEdited"
					        @click="editTodo(todo)"
					        class="todoItemLabel"
					  >{{ todo.title }}
					  </span>
					  <!-- input -->
					  <input v-else
					         class="todoItemEdit"
					         type="text"
					         v-model="todo.title"
					         @blur="doneEdit(todo)"
					         @keyup.enter="doneEdit(todo)"
					         v-focus
					  >
					  <!--# End v-if #-->
				  </span>
				  <!---->
			  </h1>
		  </div>
		
		  <!-- removeTodo() -->
		  <div class="removeItem" @click="removeTodo(index)">
			  &times;
		  </div>
		  <!---->
	  </div>
    <!---->
  </div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<style lang="scss">
@import 'TodoList.styles.scss';
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
