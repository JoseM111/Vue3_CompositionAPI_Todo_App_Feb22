/** useTodoComposable.ts */
import { computed, ComputedRef, reactive, ref } from "vue"
import { TodoType } from "../../../types/TodoType"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useTodoComposable = () => {
  
  const newTodo = ref<string>('')
  const idForTodo = ref<number>(3)
  const beforeEditCachedTitle = ref<string>('')
  const filter = ref<string>('all')
  
  // Dummy-data
  const todoList: Array<TodoType> = reactive([
    {
      id: 1,
      title: 'Get all of my semester work done early',
      completed: false,
      isEdited: false,
    },
    {
      id: 2,
      title: 'Start getting in shape on monday',
      completed: false,
      isEdited: false,
    },
  ])
  
  // computed: Will keep track of the length of todos but will remove
  // from the length if the todo is completed.
  const computedRemaining: ComputedRef<number> = computed(() => {
    return todoList.filter((todo: TodoType) => !todo.completed).length
  })
  
  // if all todos marked as done, checkAll will be true and activate
  const computedAnyRemaining: ComputedRef<boolean> = computed(() =>
    computedRemaining.value != 0
  )
  
  const computedCheckAllTodos: ComputedRef<(event: Event) => void> = computed(
  () => {
    // Since I can't pass a parameter of event type to computed, since
    // it's a getter, I will just return an anonymous function that will
    // be called once checkAll is true
    return (event: Event) => {
      const checkAll = event.target as HTMLInputElement
      
      // Iterate over todoList and set each todos completed to checkAll
      todoList.forEach((todo: TodoType) => {
        todo.completed = checkAll.checked
      })
    }
  })
  
  const computedTodoListFiltered = computed(() => {
    
    switch (filter.value) {
      case 'all':
        return todoList
      case 'active':
        // filters the completed task & shows the none completed task
        return todoList.filter((todo: TodoType) => !todo.completed)
      case 'completed':
        // filters the none completed task & shows the completed task
        return todoList.filter((todo: TodoType) => todo.completed)
    }
    
    return todoList
  })
  
  const computedShowBtnClearCompleted = computed(
  () => {
    return todoList.filter((todo: TodoType) => todo.completed).length > 0
  })
  
  // Functions ====
  
  
  /* CRUD METHODS */
  function addTodo(): void {
    // alert("Added to-do!!!")
    /** @trim(): Removes whitespace from both ends of a string.
     * --------- Whitespace in this context is all the whitespace
     * --------- characters (space, tab, no-break space, etc.) and
     * --------- all the line terminator characters */
    if ( newTodo.value.trim().length == 0 ) return
    
    todoList.push({
      id: idForTodo.value,
      title: newTodo.value,
      completed: false,
      isEdited: false,
    })
    
    newTodo.value = ''
    idForTodo.value++
  }
  
  function removeTodo(indexToPass: number): void {
    /** @splice(): The splice() method changes the contents of an array by removing
     *  ----------- or replacing existing elements and/or adding new elements in place */
    todoList.splice(indexToPass, 1)
  }
  
  function editTodo(todo: TodoType): void {
    beforeEditCachedTitle.value = todo.title
    todo.isEdited = true
  }
  
  // Wont allow you to save a empty todo or edit
  function cancelEdit(todo: TodoType): void {
    todo.title = beforeEditCachedTitle.value
    todo.isEdited = false
  }
  
  function doneEdit(todo: TodoType): void {
    
    if ( todo.title.trim() == '' ) {
      todo.title = beforeEditCachedTitle.value
    }
    
    todo.isEdited = false
  }
  
  // v-focus global
  const vFocus = {
    mounted: (target: any) => target.focus()
  }
  
  // #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return {
    newTodo, removeTodo,
    computedTodoListFiltered, addTodo,
    editTodo, cancelEdit,
    doneEdit,
    vFocus: vFocus.mounted,
    computedRemaining, computedAnyRemaining,
    computedCheckAllTodos, filter,
    computedShowBtnClearCompleted,
  }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
















