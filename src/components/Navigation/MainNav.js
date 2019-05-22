import React from "react";
import firebase from "firebase"
import styled from "styled-components";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Icon as BaseIcon } from "react-icons-kit";
import { home } from "react-icons-kit/ikons/home";
import { user } from "react-icons-kit/ikons/user";
import { shop } from "react-icons-kit/ikons/shop";
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { clipboard } from 'react-icons-kit/icomoon/clipboard'
import { bubbles3 } from 'react-icons-kit/icomoon/bubbles3';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import { userTimes } from 'react-icons-kit/fa/userTimes';
import { MdMenu } from "react-icons/md";
import { withStyles } from "@material-ui/core/styles";

const Navigation = styled.div`
	background: #0cadad;
	color: #fff;
	font-size: 1rem;
	height: 100vh;
	letter-spacing: 3px;
	line-height: 16px;
	width: 160px;
`;

const IconCnt = styled.div`
	display: flex;
	justify-content: center;
`;

const Text = styled.div`
	font-size: 1rem;
	margin-top: 3px;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`;

const NavLink = styled(Link)`
	box-sizing: border-box;
	color: inherit;
	display: flex;
	flex-direction: column;
	padding: 8px 12px;
	text-decoration: none;
	transition: all 0.3s ease;
	width: 100%;
	&:hover {
		background-color: #0c8383;
	}
`;

const styles = theme => ({
	menuBtn: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "block",
			position: "fixed",
			top: 10,
			left: 10,
			fontSize: 40,
			zIndex: 1500
		}
	},
	navigation: {
		transition: "all .5s ease",
		[theme.breakpoints.down("sm")]: {
			position: "fixed",
			zIndex: 1000,
			top: 0
		}
	},
	openedNav: {
		[theme.breakpoints.down("sm")]: {
			transform: "translateX(0%)"
		}
	},
	closedNav: {
		[theme.breakpoints.down("sm")]: {
			transform: "translateX(-100%)"
		}
	},
	navItemSelected: {
		backgroundColor: "#086464",
		color: "#fff"
	}
});

const Icon = props => <BaseIcon size={36} icon={props.icon} />;

class MainNav extends React.Component {
	state = {
		user: null,
		isChecked: false,
		selectedPath: "", 
		isNavOpen: null 
	}

	onNavItemSelect = () => {
		this.setState({ selectedPath: window.location.pathname });
	};

	handleOpenNav = () => {
		this.setState({ isNavOpen: !this.state.isNavOpen });
	};

	componentDidMount() {
		this.setState({ selectedPath: window.location.pathname });
		firebase.auth().onAuthStateChanged(user =>
            this.setState({
                user,
                isChecked: true
            }))
	}

	shouldComponentUpdate() {
		if (this.state.selectedPath !== window.location.pathname) {
			this.setState({ selectedPath: window.location.pathname });
		}
		return true;
	}

	signOut = () => {
		firebase.auth().signOut();
		return <Redirect to='/' />
	}

	render() {
		const { classes } = this.props;
		const { isNavOpen } = this.state;
		const path = this.state.selectedPath;
		const signInNavLink = (icon, text) => {
			return (
				<NavLink 
					to="/sign-in"
					onClick={this.onNavItemSelect}
				>
					<IconCnt>
						<Icon icon={icon} />
					</IconCnt>
					<Text>{text}</Text>
				</NavLink>
			)
		}
		return (
			<React.Fragment>
				<MdMenu
					className={classes.menuBtn}
					style={isNavOpen 
						? { color: "white" } 
						: { color: "#086464" }}
					onClick={this.handleOpenNav}
				/>
				<Navigation
					className={classNames(
						classes.navigation,
						isNavOpen ? classes.openedNav : classes.closedNav
					)}
				>
					<NavLink 
						to="/home"
						style={{ background: "#0cadad"}}
						onClick={this.onNavItemSelect}
					>
						<div style={{margin: "30px 0 10px", textAlign: "center"}}>
							<h1 style={{fontSize: "4rem", fontFamily: 'Courgette'}}>React</h1>
							<h5 style={{fontSize: "0.7rem", fontFamily: 'Roboto', letterSpacing: "0.6rem", marginTop: "10px"}}>SUPERMARKET</h5>
						</div>
					</NavLink>
					<NavLink 
						to="/home"
						onClick={this.onNavItemSelect}
						className={path === "/home" ? classes.navItemSelected : null}
					>
						<IconCnt>
							<Icon icon={home} />
						</IconCnt>
						<Text>Home</Text>
					</NavLink>
					{this.state.user 
						? 
						<NavLink 
							to="/user-panel"
							onClick={this.onNavItemSelect}
							className={path === "/user-panel" ? classes.navItemSelected : null}
						>
							<IconCnt>
								<Icon icon={user} />
							</IconCnt>
							<Text>User Panel</Text>
						</NavLink>
						: 
						signInNavLink(user, 'user panel')
					}
					{this.state.user
						?
						<NavLink 
							to="/market"
							onClick={this.onNavItemSelect}
							className={path === "/market" ? classes.navItemSelected : null}
						>
							<IconCnt>
								<Icon icon={shop} />
							</IconCnt>
							<Text>Market</Text>
						</NavLink>
						:
						signInNavLink(shop, 'market')
					}
					{this.state.user
						?
						<NavLink 
							to="/basket"
							onClick={this.onNavItemSelect}
							className={path === "/basket" ? classes.navItemSelected : null}
						>
							<IconCnt>
								<Icon icon={shoppingCart} />
							</IconCnt>
							<Text>Basket</Text>
						</NavLink>
						:
						signInNavLink(shoppingCart, 'basket')
					}
					{this.state.user
						?
						<NavLink 
							to="/summary-order"
							onClick={this.onNavItemSelect}
							className={path === "/summary-order" ? classes.navItemSelected : null}
						>
							<IconCnt>
								<Icon icon={clipboard} />
							</IconCnt>
							<Text>Summary the order</Text>
						</NavLink>
						:
						signInNavLink(clipboard, 'summary the order')
					}
					{this.state.user
						?
						<NavLink to="/support"
							onClick={this.onNavItemSelect}
							className={path === "/support" ? classes.navItemSelected : null}
						>
							<IconCnt>
								<Icon icon={bubbles3} />
							</IconCnt>
							<Text>Support</Text>
						</NavLink>
						:
						signInNavLink(bubbles3, 'support')
					}
					{!this.state.user ?
						(
							<NavLink to="/sign-in"
								onClick={this.onNavItemSelect}
								className={path === "/sign-in" ? classes.navItemSelected : null}
							> 
								<IconCnt>
									<Icon icon={userPlus} />
								</IconCnt>
								<Text>Sign in</Text>
							</NavLink>
						) : (
							<NavLink to="/" onClick={this.signOut}>
								<IconCnt>
										<Icon icon={userTimes} />
								</IconCnt>
								<Text>Sign out</Text>
							</NavLink>
						)
					}
				</Navigation>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(MainNav);