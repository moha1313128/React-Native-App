import React, { Component }  from 'react';
import ReviewModal from "react-native-review-modal";

class StarRate extends Component {

    constructor(props) {
    super(props);
    this.state = {
        starCount: 1.0
    };
    }

    onStarRatingPress(rating) {
    this.setState({
        starCount: rating
    });
    }

    render() {
        return (
            <ReviewModal
                starRating={this.state.starCount}
                onStarRatingPress={rating => {
                    this.onStarRatingPress(rating);
                }}
            />
        );
    }
}

export default StarRate