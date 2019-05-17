import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';




// ReactDOM.render(
//     <Nav/>,
//     document.querySelector('#root')
  // )

// function CompanyName(props){
//       return(
//     <div className="bank">{props.jina}</div>
// );
// }
// function SerialNumber(props){
//      return(
//         <div className="serial">{props.namba}</div>
//     );
// }
// function BackNumber(props){
//      return(
//         <div className="back">{props.back}</div>
//  );
// }
// function ValidThru(props){
//      return(<div className="valid">
//         <div>VALID {props.valid}</div>
//       <div>THRU</div>
//          </div>
//     );
// }
// function CardHolderName(props){
//       return(
//         <div className="name">{props.holder}</div>
//     );
// }
// function CreditCard(){
//     const name="Equity Bank";
//     const serial= `123 456 567`;
//     const back= `123`;
//     const valid= `08/19`;
//     const holder= "Dickens Juma";
//      return(<div className="card">
// <CompanyName jina={name}/>
// <SerialNumber namba={serial}/>
// <BackNumber back={back}/>
// <ValidThru valid={valid}/>
// <CardHolderName holder={holder}/>
//  </div>
// );
// }

// ReactDOM.render(
//     <CreditCard/>,
//    document.querySelector("#root"));











// // function Envelope(props){
//     const { fullName,address, street } = props.send;
//     return(<>
//         <div>
//         <div>{fullName}</div>
//         <div>{address}</div>
//         <div>{street}</div>
//         </div>  </> 
//  );
// }

// function AddressLabel({}){
// const sender={fullName:"Mama safi",
//            address: "123 KIlo ",
//            street:" Nyalenda"
// }
// const receiver={ fullName:"Elchapo",
//            address: "456 Pharmacy ",
//            street:"Lower Milimani"
// }
//  return( <>
//  <div><Envelope send={sender} /></div>
//  <br></br>
// <div><Envelope send={receiver} /></div>

//         </>

//     );
// }
// ReactDOM.render(
// <AddressLabel />
// ,document.querySelector("#root"));




function Tweet({tweet}) {
    return ( < div className = "tweet" >
        <Avatar hash = { tweet.gravatar } /> 
         <div className = "content" >
        <NameWithHandle author = { tweet.author } />  
        < Message text = { tweet.message }/> 
        <div className = "button" >
        <Time time = {
            tweet.time
        }
        /> <ReplyButton />
        <RetweetButton count = {tweet.retweet}/> 
        <LikeButton count = {
            tweet.like
        }/> 
        <MoreOptionsButton />
        </div> </div >
         </div>
    );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/nothing/${ hash }`;
    return ( <img src = {url }
        className = "avatar"
        alt = "avatar" />
         );
}

function Message({text}) {
    return (
      <div className = "message" > {
            text
        } </div>);
    }
function NameWithHandle({author}) {
 const {
            name,
            handle
        } = author;
        return ( <span className = "name-with-handle" >
 <span className = "name" > {name
            } </span> <span className = "handle" > $ { handle } </span> 
            </span >
        );
    }
    const Time = ({ time }) => {
        const timeString = moment(time).fromNow();
        return ( <span className = "time" > {
                timeString
            } </span>

        );

    }
function getRetweetCount(count) {
 if (count > 0) {
    return ( < span className = "retweet-count" > {
                    count
                } </span>
            );
        } else {
            return null;
        }
    }
    const ReplyButton = () => ( <
        i className = "fa fa-reply reply-button" / >
    );
    const RetweetButton = ({
        count
    }) => ( <
        span className = "retweet-button" >
        <
        i className = "fa fa-retweet" / > {
            getRetweetCount(count)
        } </span>
    );
    const LikeButton = ({
            count
        }) => ( <
            span className = "like-button" >
            <
            i className = "fa fa-heart" / > {
                count > 0 &&
                <
                span className = "like-count" > {
                    count
                } </span>} 
                </ span >
            );

            const MoreOptionsButton = () => ( <
                i className = "fa fa-ellipsis-h more-options-button" / >
            );
            var testTweet = {
                message: "Something about cats.",
                gravatar: "xyz",
                author: {
                    handle: "catperson",
                    name: "IAMA Cat Person"
                },
                likes: 2,
                retweets: 0,
                timestamp: "2016-07-30 21:24:37"
 }; ReactDOM.render( <
     Tweet tweet = { testTweet } />,
                document.querySelector('#root')); 
// function Barcadia(props){
//     const {name,address}=props.kifoorm;
//     return(
//       <div>
//         <div>{name}</div>
//         <div>{address}</div>
// //       </div>
// //     );
//   ){
//   }
//   function DisplayFormKwenyeIko(
//     const form={
//       name:'Barcadia Church',
//       address:'fourth street'
//     }
//     return(
//       <Barcadia kifoorm={form}/>
//     );
//   }
//   ReactDOM.render(
//       <DisplayFormKwenyeIko/>,
//       document.querySelector('#root')
//     )


