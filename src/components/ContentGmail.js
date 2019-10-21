import React, {Component} from 'react';
import ContentMessagesRow from "./ContentMessagesRow";
import ContentMessages from "./ContentMessages";

export default class ContentGmail extends Component {
    constructor (props){
        super(props);
        this.state = {
            categoryName: 'primary'
        }
    }

    changeCategories = (i, categoryText) => {

        this.setState({
            categoryName: categoryText.toLowerCase()
        });
    };

    render() {
        return (
            <div className="col-xl-9 col-md-12">
                <ContentMessagesRow
                    changeCategories={this.changeCategories}
                    categoryName={this.state.categoryName}
                />
                <ContentMessages
                    categoryName={this.state.categoryName}
                />
            </div>
        )
    }
}


