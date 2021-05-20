import React, { useState } from "react";

function App() {
    const [model, setModel] = useState({});
    const [models, setModels] = useState([]);
    const [showModel, setShowModel] = useState(false);

    /** Собрать данные из каждого поля ввода для редактора */
    function onChangeModel(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setModel({...model,  [name]: value });
    }

    /** Показать редактор */
    function getModel(event) {
        event.preventDefault();

        setModels([...models,  model ]);

        setShowModel(true);
    }

    /** Удалить поле ввода в редакторе */
    function deleteInput(index) {
        setModels(models.filter((item, i, array) => index !== i));
    }

  return (
    <div className='page'>
      <section className='manipulation-model'>
        <form className='form' onSubmit={getModel}>
          <label className='form__label'>Название параметра
            <input
                type='text'
                name='paramName'
                minLength='1'
                required='required'
                onChange={onChangeModel}/>
          </label>
            <label className='form__label'>Уровень параметра
                <input
                    type='text'
                    name='paramLevel'
                    minLength='1'
                    required='required'
                    onChange={onChangeModel}
                />
            </label>
            <label className='form__label'>Id параметра
                <input
                    type='text'
                    name='paramId'
                    minLength='1'
                    required='required'
                    onChange={onChangeModel}
                />
            </label>
          <button
              type='submit'
              className='form__open'
          >Показать редактор</button>
        </form>
          { showModel ? (
              <form className='form'>
                  <h2 className='form__title'>Редактор</h2>
                  <label className='form__label'>Название товара
                      <input
                          type='text'
                          required='required'/>
                  </label>
                  {models.length !== 0 ? models.map((item, index) => (
                      <div className='form__container' key={index}>
                          <label className='form__label'>{item.paramName}
                              <input type='text'/>
                          </label>
                          <button
                              type='button'
                              className='form__close'
                              onClick={() => deleteInput(index)}
                          />
                      </div>
                      )
                  ) : null}
              </form>
          ): null }
      </section>
    </div>
  );
}

export default App;
