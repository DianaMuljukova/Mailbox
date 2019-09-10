import React, {Component} from 'react';
import ContentMessagesRow from "./ContentMessagesRow";
import ContentMessages from "./ContentMessages";

export default class ContentGmail extends Component {
    constructor (props){
        super(props);
        this.state = {
            mailCategories: [
                {
                    className: 'blue',
                    icon: 'far fa-folder',
                    text: 'Primary',
                    link: '#',
                    default: 'active'

                },
                {
                    className: 'green',
                    icon: 'fas fa-user-friends',
                    text: 'Social',
                    link: '#',
                    default: 'notactive'
                },
                {
                    className: 'yellow',
                    icon: 'fas fa-percent',
                    text: 'Promotions',
                    link: '#',
                    default: 'notactive'
                },
                {
                    className: 'purple',
                    icon: 'fas fa-info-circle',
                    text: 'Updates',
                    link: '#',
                    default: 'notactive'
                },
                {
                    className: 'red',
                    icon: 'fas fa-ban',
                    text: 'Spam',
                    link: '#',
                    default: 'notactive'
                }
            ]
        }
    }

    changeCategories = (i) => {

        let categoriesArr = this.state.mailCategories;
        categoriesArr.map(item => {
            if (item.default == 'active') {
                item.default = 'notactive';
            }
        });

        categoriesArr[i].default = 'active';
        this.setState({
            mailCategories: categoriesArr
        })
    };

    render() {
        return (
            <div className="col-xl-9">
                <ContentMessagesRow
                    arr={this.state.mailCategories}
                    changeCategories={this.changeCategories}
                />
                <ContentMessages/>
            </div>
        )
    }
}


