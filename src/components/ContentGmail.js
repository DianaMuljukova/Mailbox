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
            ],
            categoryName: {
                isSocial: false,
                isPromotions: false,
                isUpdates: false,
                isPrimary: 'primary'
            }
        }
    }

    changeCategories = (i, categoryText) => {

        let categoriesArr = this.state.mailCategories;
        categoriesArr.map(item => {
            if (item.default == 'active') {
                item.default = 'notactive';
            }
        });
        categoriesArr[i].default = 'active';


        if (categoryText == 'Social') {
            this.setState({
                categoryName: {
                    isSocial: 'social',
                    isPromotions: false,
                    isUpdates: false,
                    isPrimary: false
                }
            })
        } else if (categoryText == 'Promotions') {
            this.setState({
                categoryName: {
                    isSocial: false,
                    isPromotions: 'promotions',
                    isUpdates: false,
                    isPrimary: false
                }
            })
        } else if (categoryText == 'Updates') {
            this.setState({
                categoryName: {
                    isSocial: false,
                    isPromotions: false,
                    isUpdates: 'updates',
                    isPrimary: false
                }
            })
        } else if (categoryText == 'Primary') {
            this.setState({
                categoryName: {
                    isSocial: false,
                    isPromotions: false,
                    isUpdates: false,
                    isPrimary: 'primary'
                }
            })
        }

        this.setState({
            mailCategories: categoriesArr
        });
    };

    render() {
        return (
            <div className="col-xl-9">
                <ContentMessagesRow
                    arr={this.state.mailCategories}
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


