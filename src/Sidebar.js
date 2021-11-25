import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { BsFillInboxesFill } from "react-icons/bs";

import "./Sidebar.css";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
}));

export default function MiniDrawer() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Drawer variant="permanent">
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<AiFillHome className="icon" />
					</ListItemIcon>
				</ListItem>

				<Divider />

				<ListItem button>
					<ListItemIcon>
						<BsFillInboxesFill className="icon" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<BsFillPeopleFill className="icon" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<IoSettingsSharp className="icon" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<BiBuildings className="icon" />
					</ListItemIcon>
				</ListItem>

				<ListItem button>
					<ListItemIcon>
						<BsFillBarChartFill className="icon" />
					</ListItemIcon>
				</ListItem>
			</Drawer>
		</Box>
	);
}
