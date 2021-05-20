import {Link, useRouteMatch} from 'react-router-dom';
function Models(props) {
    const {
        models,
        handleAddModel,
    } = props;

    console.log(models)

    const { path } = useRouteMatch();

    return (
        <>
            { models.length !== 0 ? (
                <ul>
                    { models.map((item, index, array) => (
                        <li key={index}><Link to={`${path}/$${index}`}>{item.name}</Link></li>
                        )
                    )}
                </ul>
            ) : (
                <h2>Нет добавленных товаров</h2>
            )}
            <button
                type='button'
                onClick={handleAddModel}
            >Добавить товар</button>
        </>
    );
}

export default Models;