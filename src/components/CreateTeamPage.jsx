import React from "react";
import CreateTeamTitles from "./CreateTeamTitles";

class CreateTeamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo : ""
        }
    }
    render  () {
        return(
            <CreateTeamTitles/>
        )
    }
}
export default CreateTeamPage;