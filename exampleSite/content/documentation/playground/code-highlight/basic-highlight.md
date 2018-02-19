+++
title = "Basic highlight"
weight = 10
+++

### Basic highlight

This tutorial explains, how to insert Python snippets in the text with and without line numbering.

#### Simple code fence

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 


#### Bash script specified - fonts should be the same

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

```
$ python /Applications/BornAgain.app/bornagain_python_install.py
```

```bash
$ python /Applications/BornAgain.app/bornagain_python_install.py
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

#### Bash script, long line

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

```bash
$ python /Applications/BornAgain.app/Contents/share/BornAgain-1.10/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

#### Python code highlight basics

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 

{{< highlight python >}}

import sys
import numpy


class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y


def say_hello():
    """
    Prints 'Hello World' message
    """
    b = Base()
    print("Hello World", b.value())


if __name__ == '__main__':
    say_hello()

{{< /highlight >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 

#### Code Fence

```python
class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y
```


#### Very long lines

{{< highlight python >}}

def hello_world():
      ln_distr = ba.DistributionLogNormal(self.radius.value, self.sigma.value)
      par_distr = ba.ParameterDistribution("/Particle/FullSphere/Radius", ln_distr, nparticles, nfwhm, ba.RealLimits.limited(0.0, self.hmdso_thickness.value/2.0))

{{< /highlight >}}

#### Highlighting with line numbers (inlined)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 

{{< highlight python "linenos=inline,hl_lines=5">}}

class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y

{{< /highlight >}}



#### Highlighting with line numbers as table (to allow copy-and-paste)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

{{< highlight python "linenos=table,hl_lines=5">}}

class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y

{{< /highlight >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 


#### Highlighting with line numbers as table (to allow copy-and-paste)
##### (ane very long line)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

{{< highlight python "linenos=table,hl_lines=5">}}

class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y

def hello_world():
    ln_distr = ba.DistributionLogNormal(self.radius.value, self.sigma.value)
    par_distr = ba.ParameterDistribution("/Particle/FullSphere/Radius", ln_distr, nparticles, nfwhm, ba.RealLimits.limited(0.0, self.hmdso_thickness.value/2.0))

{{< /highlight >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 


#### Highlighting with line numbers starting from given value.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 

{{< highlight python "linenos=table,hl_lines=5,linenostart=42">}}

class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y

def hello_world():
    ln_distr = ba.DistributionLogNormal(self.radius.value, self.sigma.value)
    par_distr = ba.ParameterDistribution("/Particle/FullSphere/Radius", ln_distr, nparticles, nfwhm, ba.RealLimits.limited(0.0, self.hmdso_thickness.value/2.0))

{{< /highlight >}}
