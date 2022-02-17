<!-- @TodoList -->
<script lang="ts" setup>
import { useTodoComposable } from "./composables/useTodoComposable"
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
const {
	newTodo, removeTodo,
	todoList, addTodo,
	editTodo, doneEdit,
	cancelEdit, vFocus
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
	  >

    <!-- For-loop(TodoList) -->
	  <div
		  v-for="(todo, index) in (todoList)" :key="todo.id"
		  class="todoItem"
	  >
		  <div>
			  <h1 style="cursor: pointer;">
				  <span class="indexColor">
					  {{ todo.id === 0 ? todo.id : index + 1 }}
				  </span>
				  <!---->
				  <span class="todoItemLeft">
					  <!-- input checkbox -->
					  <input
						  class="inputIsComplete"
						  type="checkbox"
						  v-model="todo.completed"
						  checked
					  >
					  
					  <!--# Beginning v-if #-->
					  <span v-if="!todo.isEdited"
					        @click="editTodo(todo)"
					        class="todoItemLabel"
					  >
						  <span :class="{ isCompleted : todo.completed }">
							  {{ todo.title }}
						  </span>
					  </span>
					  <!-- input -->
					  <input v-else
					         class="todoItemEdit"
					         type="text"
					         v-model="todo.title"
					         @blur="doneEdit(todo)"
					         @keyup.enter="doneEdit(todo)"
					         @keyup.esc="cancelEdit(todo)"
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
@import 'styles/TodoList.styles';
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
