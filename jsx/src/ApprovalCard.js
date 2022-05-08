import React from 'react';


const ApprovalCard = (props)=>{

    return(
        <div class="ui card">
            <div class="content">
                {props.children}
            </div>
            <div class="ui two buttons">
                <div class="ui basic green button">Approve</div>

                <div class="ui basic red button">Reject</div>

            </div>

        </div>
    )
}
export default ApprovalCard;