import * as state from './gameState.js'

var init = function() {
    $('#summary').text("Summary...")
}

var update = function() {
    var stats = state.stats()
    var summary = "Status: " + stats.status + " Total Symbols: " + stats.totalSymbols + " Symbols Matched: " + stats.successCount + " Trials left: " + stats.trialsLeft
    $('#summary').text(summary)
}

export { init, update }