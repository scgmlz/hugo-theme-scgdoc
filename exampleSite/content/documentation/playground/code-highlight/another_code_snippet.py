    int min3(int a, int b, int c) {
       if (a < min(b,c)) {
          return a;
       }
       else if(b < min(a,c)) {
          return b;
       }
       else if(c < min(a,b)) {
          return c;
       }
    }
    int min4(int a, int b, int c, int d) {
       if (a < min3(b,c,d)) {
          return a;
       }
       else if(b < min3(a,c,d)) {
          return b;
       }
       else if(c < min3(a,b,d)) {
          return c;
       }
       else if(d < min3(a,b,c)) {
          return d;
       }
    }
    

