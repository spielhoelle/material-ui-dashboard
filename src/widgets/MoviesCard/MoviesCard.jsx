import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
//
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Collapse from 'material-ui/transitions/Collapse';

import '../Card/Card.css';

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%'
    },
    card: {
        minWidth: 275
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        marginBottom: 16,
        fontSize: 14
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    pos: {
        marginBottom: 12
    },
    actions: {
        display: 'flex'
    }
});

class MoviesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            data: {},
            expanded: false,
            classes: this.props
        };
    }
    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/list/1';
        const key = '?api_key=733712954fe242fa22a31638b23362b9';
        fetch(url + key)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ data });
            });
    }
    handleExpandClick = item => {
        this.setState({ expanded: !this.state.expanded });
    };

    shuffle = data => {
        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [data[i], data[j]] = [data[j], data[i]];
        }
        return data;
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        });
    };
    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        let data = this.shuffle(this.state.data.items || []);

        return (
            <React.Fragment>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {data.map((item, i) => {
                        return (
                            <Card key={i} className={this.props.classes.card}>
                                <CardMedia
                                    className={this.props.classes.media}
                                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
                                        item.poster_path
                                    }`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        id="cardtitle"
                                        className={this.props.classes.title}
                                        color="textSecondary"
                                    >
                                        Movie of the Day
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        className={this.props.classes.pos}
                                        color="textSecondary"
                                    >
                                        Rate: {item.vote_average}
                                    </Typography>
                                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                        <Typography component="p">{item.overview}</Typography>
                                    </Collapse>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button
                                        className={
                                            (this.props.classes.expand,
                                            {
                                                [this.props.classes.expandOpen]: this.state.expanded
                                            })
                                        }
                                        onClick={item => this.handleExpandClick(item)}
                                        aria-expanded={this.state.expanded}
                                        aria-label="Show more"
                                    >
                                        Read About
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                </SwipeableViews>

                <MobileStepper
                    variant="dots"
                    steps={6}
                    position="static"
                    activeStep={this.state.activeStep}
                    className={classes.root}
                    nextButton={
                        <Button
                            size="small"
                            onClick={this.handleNext}
                            disabled={this.state.activeStep === 5}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={this.handleBack}
                            disabled={this.state.activeStep === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </React.Fragment>
        );
    }
}

MoviesCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MoviesCard);
