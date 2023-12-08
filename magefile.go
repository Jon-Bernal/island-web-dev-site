//go:build mage

// A comment on the package will be output when you list the targets of a
// magefile.
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/magefile/mage/mg"
)

// Build target is any exported function with zero args with no return or an error return.
// If a target has an error return and returns an non-nil error, mage will print
// that error to stdout and return with an exit code of 1.
// func Install() error {

// }

// The first sentence in the comment will be the short help text shown with mage -l.
// The rest of the comment is long help text that will be shown with mage -h <target>
func Target() {
    // by default, the log stdlib package will be set to discard output.
    // Running with mage -v will set the output to stdout.
    log.Printf("Hi!")
}

// Start the dev server
func Dev() {
	fmt.Printf("starting server")
	log.Printf("starting server")
}

// A var named Default indicates which target is the default.  If there is no 
// default, running mage will list the targets available.
// var Default = Install

// Targets may have a context argument, in which case a default context is passed
// to the target, which will be cancelled after a timeout if the -t flag is used.
func Build(ctx context.Context) {
    mg.CtxDeps(ctx, Target)
}