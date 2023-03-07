import PropTypes from "prop-types";


function User({name, surName, isLogIn, age,friends, address}) {

    if(!isLogIn){
        return <div>Giriş yapmadınız</div>
    }
    return(
        <>
        <h1>
            {`${name} ${surName} (${age})`}
        </h1>

        {address.title} {address.zip}
        <br />
        <br />
        {
            friends &&
                friends.map((friend) =>
                    <div key={friend.id}>
                            {friend.id} - {friend.name}
                    </div> )
        }
        

        </>
    );
}

// Girilen propların tiplerini tanımlama
// Zorunlu alanlar icin isReqiured ekliyoruz
User.propTypes ={
    name: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    isLogIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
};


// Default olarak gönderilen props
User.defaultProps = {
    isLogIn : false,
    name: "isimsiz"
}

export default User;