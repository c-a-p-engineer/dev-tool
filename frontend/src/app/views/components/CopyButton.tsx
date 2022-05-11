import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React, { useState } from "react";
import CopyToClipBoard from "react-copy-to-clipboard";

const CopyButton: React.FC<{ copyInput: string }> = ({ copyInput }) => {
  const [openTip, setOpenTip] = useState<boolean>(false);

  const handleCloseTip = (): void => {
    setOpenTip(false);
  };

  const handleClickButton = (): void => {
    setOpenTip(true);
  };

  return (
    <Tooltip
      arrow
      open={openTip}
      onClose={handleCloseTip}
      disableHoverListener
      placement="top"
      title="Copied!"
    >
      <CopyToClipBoard text={copyInput}>
        <IconButton onClick={handleClickButton}>
          <AssignmentIcon />
        </IconButton>
      </CopyToClipBoard>
    </Tooltip>
  );
};

export default CopyButton;
