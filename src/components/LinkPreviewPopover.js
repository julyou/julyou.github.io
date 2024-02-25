// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// export default function LinkPreviewPopover({ link, children }) {
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handlePopoverOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handlePopoverClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);

//     return (
//         <div>
//             <Typography
//                 aria-owns={open ? 'mouse-over-popover' : undefined}
//                 aria-haspopup="true"
//                 onMouseEnter={handlePopoverOpen}
//                 onMouseLeave={handlePopoverClose}
//             >
//                 {children}
//             </Typography>
//             <Popover
//                 id="mouse-over-popover"
//                 sx={{
//                     pointerEvents: 'none',
//                 }}
//                 open={open}
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'left',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'left',
//                 }}
//                 onClose={handlePopoverClose}
//                 disableRestoreFocus
//             >
//                 <iframe
//                     title="Link Preview"
//                     src={link}
//                     style={{ border: 'none', width: '300px', height: '200px' }}
//                 />
//             </Popover>
//         </div>
//     );
// }
