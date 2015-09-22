angular.module('nemLogging',[])
.service 'nemSimpleLogger', [ '$log', ($log) ->
  _fns = ['log', 'info', 'debug', 'warn', 'error']
  #defaulting logging to be on with error only (better for perf and less mysterious errors)
  LEVELS =
    log: 1
    info: 2
    debug: 3
    warn: 4
    error: 5

  maybeExecLevel = (level, current, fn) ->
    fn() if level >= current

  log = (logLevelFnName, msg) ->
    if $log?
      $log[logLevelFnName] msg
    else
      console[logLevelFnName] msg

  class Logger
    constructor: ->
      @doLog = true
      logFns = {}
      _fns.forEach (level) =>
        logFns[level] = (msg) =>
          if @doLog
            maybeExecLevel LEVELS[level], @currentLevel, ->
              log level, msg

      @LEVELS = LEVELS
      @currentLevel = LEVELS.error
      _fns.forEach (fnName) =>
        @[fnName] = logFns[fnName]

    spawn: ->
      new Logger()

    #This is mainly for testing let me know if there is a better way
    setLog: (someLogger) ->
      $log = someLogger

  new Logger()
]
