export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-6 bg-background rounded" />
              <div className="w-2 h-8 bg-background rounded" />
              <div className="w-2 h-10 bg-background rounded" />
            </div>
            <span className="font-heading font-semibold">Assessment Solutions LLC</span>
          </div>
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Assessment Solutions LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
