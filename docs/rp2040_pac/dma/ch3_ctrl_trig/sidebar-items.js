initSidebarItems({"enum":[["DATA_SIZE_A","Set the size of each bus transfer (byte/halfword/word). READ_ADDR and WRITE_ADDR advance by this amount (1/2/4 bytes) with each transfer."],["RING_SIZE_A","Size of address wrap region. If 0, don't wrap. For values n > 0, only the lower n bits of the address will change. This wraps the address on a (1 << n) byte boundary, facilitating access to naturally-aligned ring buffers.\\n\\n Ring sizes between 2 and 32768 bytes are possible. This can apply to either read or write addresses, based on value of RING_SEL."],["TREQ_SEL_A","Select a Transfer Request signal.\\n The channel uses the transfer request signal to pace its data transfer rate. Sources for TREQ signals are internal (TIMERS) or external (DREQ, a Data Request from the system).\\n 0x0 to 0x3a -> select DREQ n as TREQ"]],"struct":[["BSWAP_W","Write proxy for field `BSWAP`"],["CHAIN_TO_W","Write proxy for field `CHAIN_TO`"],["DATA_SIZE_W","Write proxy for field `DATA_SIZE`"],["EN_W","Write proxy for field `EN`"],["HIGH_PRIORITY_W","Write proxy for field `HIGH_PRIORITY`"],["INCR_READ_W","Write proxy for field `INCR_READ`"],["INCR_WRITE_W","Write proxy for field `INCR_WRITE`"],["IRQ_QUIET_W","Write proxy for field `IRQ_QUIET`"],["READ_ERROR_W","Write proxy for field `READ_ERROR`"],["RING_SEL_W","Write proxy for field `RING_SEL`"],["RING_SIZE_W","Write proxy for field `RING_SIZE`"],["SNIFF_EN_W","Write proxy for field `SNIFF_EN`"],["TREQ_SEL_W","Write proxy for field `TREQ_SEL`"],["WRITE_ERROR_W","Write proxy for field `WRITE_ERROR`"]],"type":[["AHB_ERROR_R","Reader of field `AHB_ERROR`"],["BSWAP_R","Reader of field `BSWAP`"],["BUSY_R","Reader of field `BUSY`"],["CHAIN_TO_R","Reader of field `CHAIN_TO`"],["DATA_SIZE_R","Reader of field `DATA_SIZE`"],["EN_R","Reader of field `EN`"],["HIGH_PRIORITY_R","Reader of field `HIGH_PRIORITY`"],["INCR_READ_R","Reader of field `INCR_READ`"],["INCR_WRITE_R","Reader of field `INCR_WRITE`"],["IRQ_QUIET_R","Reader of field `IRQ_QUIET`"],["R","Reader of register CH3_CTRL_TRIG"],["READ_ERROR_R","Reader of field `READ_ERROR`"],["RING_SEL_R","Reader of field `RING_SEL`"],["RING_SIZE_R","Reader of field `RING_SIZE`"],["SNIFF_EN_R","Reader of field `SNIFF_EN`"],["TREQ_SEL_R","Reader of field `TREQ_SEL`"],["W","Writer for register CH3_CTRL_TRIG"],["WRITE_ERROR_R","Reader of field `WRITE_ERROR`"]]});