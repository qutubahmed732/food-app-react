import './App.css';


function FoodCategory() {
    return (
        <>
            <div className="foodItem" style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div className="image">
                    <img src="../download.jfif" alt="biryani" />
                </div>
                <div className="itemInfo">
                    <div className="name">
                        Biryani
                    </div>
                    <div className="description">
                        <p>Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodCategory;