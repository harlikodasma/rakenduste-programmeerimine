import ItemList from '../components/ItemList';
import CategoryList from '../components/CategoryList';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../General.css'

function AdminHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            //console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    }, [])

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data => {
            //console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [])

    function makeDeleteRequest(itemId) {
        fetch('http://localhost:8080/delete-item/' + itemId, { method: 'DELETE'} ).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    }

    if(isLoading) {
        return (
            <div>Laeb...</div>
        );
    }

    return (
        <div>
            <h2>Esemed</h2>
            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />
            <br />
            <br />
            <h2>Kategooriad</h2>
            <CategoryList categories={loadedCategories} />
            <br />
        </div>
    )
}

export default AdminHome;