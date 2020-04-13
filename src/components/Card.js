import Rect, { Fragment } from 'react';

const Card = ({name, email, id}) => {
    return(
<Fragment className='tc grow bg-green-light br3 pa3 ma2 bw2 shadow-5'>
<img src={`https://robohash.org/${id}?size=200x200`} alt=""/>
<div>
    <h2>{name}</h2>
    <p>{email}</p>
</div>
</Fragment>
    );
}

export default Card;