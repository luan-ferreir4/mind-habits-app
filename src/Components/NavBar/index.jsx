import { AppBar, Toolbar, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { useState } from "react";
import { IconButton } from "@material-ui/core";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { LoginContext } from "../../Providers/login";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "var(--green-pallet-one)",
    color: "#f5f5f5",
    minHeight: "65px",
    boxShadow: "none",
  },
  item: {
    fontSize: "16px",
    fontFamily: "var(--font-type-formal)",
    lineHeight: "1",
    height: "50px",
    "@media (min-width: 1024px)": { fontSize: "22px" },
    fontWeight: "var(--font-w-bold)",
  },
  icon: {
    position: "absolute",
    right: "0px",
    color: "#f5f5f5",
  },
}));

export const NavBar = ({ typeNav }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { logout } = useContext(LoginContext);

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(history)
  };

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <MenuItem className={classes.item} onClick={() => sendTo("/")}>
            Home
          </MenuItem>
          <MenuItem className={classes.item} onClick={() => sendTo("/aboutUs")}>
            Quem Somos
          </MenuItem>

          <IconButton
            className={classes.icon}
            size="medium"
            edge="start"
            aria-label="menu"
            onClick={handleClick}
          >
            <AiOutlineMenu />
          </IconButton>

          {typeNav === "unlogged" && (
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                style: {
                  maxHeight: "200px",
                  width: "200px",
                },
              }}
            >
              <MenuItem onClick={() => sendTo("/login")}>Login</MenuItem>
              <MenuItem onClick={() => sendTo("/register")}>Cadastro</MenuItem>
            </Menu>
          )}
          {typeNav === "logged" && (
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                style: {
                  maxHeight: "200px",
                  width: "200px",
                },
              }}
            >
              <MenuItem onClick={() => sendTo("/dashboard")}>Perfil</MenuItem>
              <MenuItem onClick={() => sendTo("/userhabits")}>
                Meus Hábitos
              </MenuItem>
              <MenuItem onClick={() => sendTo("/usergroups")}>
                Meus Grupos
              </MenuItem>
              <MenuItem onClick={() => sendTo("/groupscommunity")}>
                Grupos
              </MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
