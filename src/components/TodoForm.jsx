import { useState } from "react";


const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");


    //funcion para el submit del form, 
    const handleSubmit = (e) => {
        e.preventDefault();

        // si no tiene titulo o categoria, retorna a funcion y no sigue el submit
        if (!value || !category) return;
        /*   if (!value) alert("debes escribir el titulo")
          if (!category) alert("debes elegir categoria ") */

        addTodo(value, category);

        //limpar campos
        setValue("")
        setCategory("")
        console.log(value, category);
    }



    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value=""> Selecione uma categoria</option>
                    <option value="Trabalho"> Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>

                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm