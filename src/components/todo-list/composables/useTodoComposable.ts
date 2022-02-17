/** useTodoComposable.ts */
import { TodoType } from "../../../types/TodoType"
import { reactive, ref } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useTodoComposable = () => {
  
  const newTodo = ref<string>('')
  const idForTodo = ref<number>(3)
  const beforeEditCachedTitle = ref<string>('')
  
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
  
  // Functions ====
  function addTodo() {
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
  
  function removeTodo(indexToPass: number) {
    /** @splice(): The splice() method changes the contents of an array by removing
     *  ----------- or replacing existing elements and/or adding new elements in place */
    todoList.splice(indexToPass, 1)
  }
  
  function editTodo(todo: TodoType) {
    beforeEditCachedTitle.value = todo.title
    todo.isEdited = true
  }
  
  // Wont allow you to save a empty todo or edit
  function cancelEdit(todo: TodoType) {
    todo.title = beforeEditCachedTitle.value
    todo.isEdited = false
  }
  
  function doneEdit(todo: TodoType) {
  
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
    todoList, addTodo,
    editTodo, cancelEdit,
    doneEdit,
    vFocus: vFocus.mounted,
  }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
















