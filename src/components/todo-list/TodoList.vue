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
	addTodo,
	editTodo, doneEdit,
	cancelEdit, vFocus,
	computedRemaining,
	computedAnyRemaining,
	computedCheckAllTodos,
	filter, computedTodoListFiltered,
	computedShowBtnClearCompleted,
} = useTodoComposable()

// Lifecycle hook to focus the ref in the input

</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
  <div class="todoListContainer">
    <!-- Input-top-container -->
	  <input
		  v-model="newTodo"
		  @keyup.enter="addTodo"
		  type="text"
		  class="todoInput"
		  placeholder="What needs to be done"
	  >

    <!-- For-loop(TodoList)-container -->
	  <div
		  v-for="(todo, index) in (computedTodoListFiltered)" :key="todo.id"
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
		
		  <!-- removeTodo()-container -->
		  <div class="removeItem" @click="removeTodo(index)">
			  &times;
		  </div>
		  <!---->
	  </div>

    <!-- checkAll-container -->
	  <div>
		  <div class="checkAllContainer">
			  <!-- labeled checkAll inputButton-checkbox -->
			  <label>
				  <input
					  class="inputCheckAll"
					  type="checkbox"
					  :checked="!computedAnyRemaining"
					  @change="computedCheckAllTodos"
				  >
				  <h1 class="checkAll">Check All</h1>
			  </label>
			
			  <!-- computedRemaining-todos -->
			  <div>
				  <span class="extraContainer">
					  <span class="computedRemaining">{{ computedRemaining }}</span>
					  items left
				  </span>
			  </div>
		  </div>
	  </div>

    <!-- filter-buttons -->
	  <div class="checkAllContainer">
		 <div>
			 <!-- all-button -->
			 <button
				 class="buttonState"
				 :class="{ active: filter === 'all' }"
				 @click="filter = 'all'"
			 >All
			 </button>
			 <!-- active-button -->
			 <button
				 class="buttonState"
				 :class="{ active: filter === 'active' }"
				 @click="filter = 'active'"
			 >Active
			 </button>
			 <!-- completed-button -->
			 <button
				 class="buttonState"
				 :class="{ active: filter === 'completed' }"
				 @click="filter = 'completed'"
			 >Completed
			 </button>
		 </div>
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

















