import React, { useState } from "react";

function App() {
  const [ model, setModel ] = useState([]);
  const [ selectedModel, setSelectedModel ] = useState([]);
  const [ colorsModel, setColorsModel ] = useState({});
  const dataModels = {
    name: model.name,
    paramValues: [
      {
        paramId: 1,
        value: model.purpose
      },
      {
        paramId: 2,
        value:  model.width
      }
    ],
    colors: [colorsModel].map((item) => (

        {
          name: item.color,
          paramValues: [
              {
                paramId: 3,
                value: item.complementaryСolors
              }
          ],
          sizes: [item.RussianSize].map((size) => (
              {
                name: size,
                paramValues: [
                  {
                    paramId: 4,
                    value: size
                  }
                ]
              })
          )
        })
    )
  }

  /** Получить данные с полей  */
  function onChangeModel(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    (target.options !== undefined)
        ? setSelectedModel(Array.from(target.options).filter(option => option.selected).map(option => option.value))
        : setModel({...model, [name]: value});

    if (name === 'color' || name === 'complementaryСolors' || name === 'RussianSize') {
      setColorsModel({...colorsModel, [name]: value, RussianSize: selectedModel })
    }
  }

  /** Добавить форму цвета и размеров */
  function handleClickColors(event) {
    event.target.after(addColors());
  }

  /** Получить структуру данных */
  function getModel() {
    const dataModelsJSON = JSON.stringify(dataModels);

    console.log(dataModelsJSON);
  }

  function addColors() {
    return (
        <>
          <label className='form__label'>Цвет
            <input
                type='text'
                name='color'
                minLength='6'
                required='required'
                onChange={onChangeModel}/>
          </label>
          <label className='form__label'>Дополнительные цвета
            <input
                type='text'
                name='complementaryСolors'
                minLength='6'
                required='required'
                onChange={onChangeModel}/>
          </label>
          <div>Российский размер</div>
          <select id='select' name='RussianSize' className='form__select' required
                  multiple size='8' onInput={onChangeModel}>
            <option>40 S</option>
            <option>42 S</option>
            <option>44 M</option>
            <option>46 M</option>
            <option>48 L</option>
            <option>50 L</option>
            <option>52 XXL</option>
            <option>54 XXL</option>
          </select>
        </>
    );
  }

  return (
    <div className='page'>
      <section className='manipulation-model'>
        <form className='form'>
          <label className='form__label'>Название
            <input
                type='text'
                name='name'
                required='required'
                onChange={onChangeModel}/>
          </label>
          <div className='form__container'>
            <label>
              <input type='radio' name='purpose' value='daily' className='form__radio' onChange={onChangeModel}/>
              Повседневный</label>
            <label>
              <input type='radio' name='purpose' value='festive' className='form__radio' onChange={onChangeModel}/>
              Праздничный</label>
          </div>
          <label className='form__label'>Длина
            <input
                type='text'
                name='width'
                minLength='2'
                required='required'
                onChange={onChangeModel}/>
          </label>
          {addColors()}
          <button
              type='button'
              onClick={handleClickColors}
          >Добавить цвет</button>
          <button
              type='button'
              onClick={getModel}
          >Показать структуру</button>
        </form>
      </section>
    </div>
  );
}

export default App;
