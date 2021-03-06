import React from 'react';
import _ from '../../Language/Language';
// import CreateGroup from '../../assets/CreateGroup.mp4'

class Restore_File_Folder extends React.Component {
	state = {
		loadVideo: true
	};

	componentDidMount() {
		// If Group is on a dodgy connection, don't load the video at all
		if ('connection' in navigator) {
			if (navigator.connection.downlink < 5) {
				this.setState({ loadVideo: false });
			}
		}
	}
	render() {
		const { loadVideo } = this.state;

		return (
			<div>
				<div>
					<h3>{_('To Restore File/Folder, Please follow below mention steps:')}</h3>
					<ul>
						<h6>{_('Step # 1: Click on Recycle Bin, located at Side Navigation Bar')}</h6>
						<h6>{_('Step # 2: In Recycle Bin, Right Clcik on The File/Folder, you want to restore')}</h6>
						<h6>{_('Step # 3: Clcik Restore to complete operation')}</h6>
					</ul>

					{/* <video controls>
            <source src={CreateGroup} type="video/mp4" />
          </video> */}
				</div>
			</div>
		);
	}
}
export default Restore_File_Folder;
